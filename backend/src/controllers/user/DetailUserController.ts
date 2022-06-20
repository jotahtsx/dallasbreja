import {Request, Response} from 'express'
import { DetailUserService } from '../../services/user/DetailUserService'

class DetailUserController{
    async handle(req: Request, res: Response){

        const detailUserserService = new DetailUserService();

        const user = await detailUserserService.execute();

        return res.json(user);

    }
}

export { DetailUserController }
