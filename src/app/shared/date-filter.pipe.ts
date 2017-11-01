import { PipeTransform, Pipe } from '@angular/core';
import { Tweet } from '../models/tweet';

@Pipe({
    name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {
    transform(tweets: Tweet[], filterBy: string): any {
        if (filterBy == 'all') {
            return tweets;
        }
        let monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let a = filterBy.split('-');
        return tweets.filter(it => new Date(it.created_date).getMonth().toString().toLowerCase().indexOf(monthsList.indexOf(a[0]).toString()) > -1);
    }
}