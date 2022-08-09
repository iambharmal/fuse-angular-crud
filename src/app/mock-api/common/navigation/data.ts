/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

const navigation: FuseNavigationItem[] = [
    {
        id   : 'basic',
        title: 'Basic',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/basic'
    },
    {
        id   : 'third-party',
        title: 'Third Party',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/third-party'
    }
];

export const defaultNavigation: FuseNavigationItem[] = navigation;
export const compactNavigation: FuseNavigationItem[] = navigation;
export const futuristicNavigation: FuseNavigationItem[] = navigation;
export const horizontalNavigation: FuseNavigationItem[] = navigation;
