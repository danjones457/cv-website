import Paper from '@material-ui/core/Paper';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

export default function Content(props) {
    return (
        <TimelineItem>
            <TimelineOppositeContent>
                <p className="text-white text-sm">
                    {props.date}
                </p>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot className="border-green" variant="outlined" />
                {!props.last ? <TimelineConnector /> : null}
            </TimelineSeparator>
            <TimelineContent>
                <Paper elevation={3} className="lg:flex p-2">
                    <div className="w-3/4 lg:w-1/4 pr-2 lg:m-auto">
                        <img src={process.env.PUBLIC_URL + '/work-logos/' + props.logoUrl} />
                    </div>
                    <div className="w-full lg:w-3/4">
                        <h1 className="text-2xl">
                            {props.name}
                        </h1>
                        <p className="text-gray-500">{props.role}</p>
                        <p>{props.description}</p>
                    </div>
                </Paper>
            </TimelineContent>
        </TimelineItem>
    );
}