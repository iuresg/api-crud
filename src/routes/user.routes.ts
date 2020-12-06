import { Router } from 'express'
import { getCustomRepository, getRepository } from 'typeorm';
import User from '../entity/User';
import { FindUserRepository, SaveUserRepository } from '../repositories/UserRepository';
import bcrypt from 'bcrypt'

const userRouter = Router();

userRouter.get('/', async (req, res) => {
    const repository = getRepository(User)
    const users = await repository.find()

    if (users.length <= 0) {
        throw res.status(400).json({ mensagem: "Não existem usuarios cadastrados" })
    }



    res.status(200).json(users)
})

userRouter.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body
        const repository = getCustomRepository(SaveUserRepository)

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const existUser = await getRepository(User).findOne({ email })

        if (existUser) {
            throw res.status(400).json({ mensagem: "Email ja usado" })
        }

        const saveRepo = await repository.SaveUser(name, hash, email)

        delete saveRepo.password;

        return res.json(saveRepo)

    } catch (error) {
        console.log('error=====>', error)
    }

})


userRouter.get('/:name', async (req, res) => {
    const { name } = req.params
    const repository = getCustomRepository(FindUserRepository)
    const resposta = await repository.findByName(name)

    if (resposta.length <= 0) {
        throw res.status(404).json({ err: "Usuario não existe" })
    }

    return res.json(resposta)
})

userRouter.put('/:id', async (req, res) => {
    const { id } = req.params
    const { name, email, password } = req.body

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const repository = getRepository(User)
    const user = await repository.findOne(id)
    const userId = user.id

    const saveUser = await repository.update(userId, { name, password: hash, email });

    return res.json(saveUser)


})

userRouter.delete('/:id', async (req, res) => {
    const repository = getRepository(User)
    const {id} = req.params
    const user = repository.delete(id)

    return res.json({message: "Deletado com Sucesso"})
})

export default userRouter;