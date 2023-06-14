import { observer } from 'mobx-react-lite';
import { Header, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/api/stores/store';
import AcitivityListItem from './ActivityListItem';
import { Fragment } from 'react';

export default observer (function ActivityList () {
    
    const {activityStore} = useStore();
    const {groupedActivities} = activityStore

    return (
        <>
            {groupedActivities.map(([group, activities]) => (
                <Fragment key={group}>
                    <Header sub color ='teal'>
                        {group}
                        </Header>
                {activities.map(activity => (
                    <AcitivityListItem key={activity.id} activity={activity} />
                ))
                }

                </Fragment>
            ))}
        
        </>
        
    )
})