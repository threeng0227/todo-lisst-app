import { AppImages } from "assets";
export interface ICategory {
    id: number,
    name: string,
    icon: any,
    task: number,
    width: number,
    heigth: number,
}
export const CATEGORY: ICategory[] = [{
    id: 1,
    name: 'College stuff',
    icon: AppImages.ICON_UNIVERSITY,
    task: 0,
    width: 23,
    heigth: 20,
},
{
    id: 2,
    name: 'Work',
    icon: AppImages.ICON_WORK,
    task: 0,
    width: 20.5,
    heigth: 20
},
{
    id: 3,
    name: 'Study',
    icon: AppImages.ICON_UNIVERSITY,
    task: 0,
    width: 23,
    heigth: 20,
},
{
    id: 4,
    name: 'Personal project',
    icon: AppImages.ICON_FOLDER,
    task: 0,
    width: 20,
    heigth: 17.14
},
{
    id: 5,
    name: 'Social life',
    icon: AppImages.ICON_CHAT,
    task: 0,
    width: 26,
    heigth: 18
},
{
    id: 6,
    name: 'Home',
    icon: AppImages.ICON_HOME,
    task: 0,
    width: 22,
    heigth: 21
}]