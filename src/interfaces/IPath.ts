import { Route } from '@angular/router';
import { IItemList } from './IItemList';

export interface IPath {
    item: IItemList,
    route: Route,
}