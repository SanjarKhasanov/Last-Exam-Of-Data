import {PrismaClient} from '@prisma/client'

const prisma  = new PrismaClient()

export type User = {
    name: string;
    surname: string;
    country: string;
    status: string;
}

export function createUser(user: User) {
    return prisma.user.create({
        data: user
    })
}

export function getAllUser() {
    return prisma.user.findMany()
}

export function deleteUser(id: number) {
    return prisma.user.delete({
        where: {
            id
        }
    })
}

export function updateStatus(id:number, status: string) {
    return prisma.user.update({
        where: {
            id
        },
        data:{
            status
        }
    })
}