import { observer } from "mobx-react-lite";
import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/api/stores/store";
import ActivityList from "./ActivityList";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/loadingComponents";


export default observer ( function ActivityDashboard() {
 const {activityStore} = useStore();
 const {loadActivities, activityRegistry} = activityStore;


  useEffect(() => {
    if (activityRegistry.size <= 1)loadActivities();
  }, [loadActivities, activityRegistry.size]);

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />
 
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList  />
      </Grid.Column>
      <Grid.Column width="6">
        <h2>Activity filters</h2>
      </Grid.Column>
    </Grid>
  );
}
)