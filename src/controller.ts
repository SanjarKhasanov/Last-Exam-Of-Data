import { NextFunction, Request, Response } from "express";
import { createUser, deleteUser, getAllUser, updateStatus, User } from "./service";

export async function getHomePage(req: Request, res: Response) {
    const leads: any = await getAllUser()
    res.render('index', {
        leads
    })

}

export async function postLogin(req: Request, res: Response, next: NextFunction) {
    try {
        const body = req.body as User
        await createUser(body)
        const leads: any = await getAllUser()
        res.render('index', {
            leads
        })
    } catch (error) {
        next(error)
    }
}

export async function removeUser(req: Request, res: Response, next: NextFunction) {
    try {
        const id = +req.params.id;
        await deleteUser(id)
        res.redirect('/')
    } catch (error) {
        next(error)
    }
}

export async function changeInfo(req: Request, res: Response) {
    const { id, status } = req.params;
    console.log(id, status);
    await updateStatus(+id, status);
    res.redirect('/');
};