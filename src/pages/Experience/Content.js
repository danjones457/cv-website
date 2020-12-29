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
                <div className="outer-content">
                    <div className="lg:flex p-4 bg-white rounded-lg">
                        <div className="w-3/4 m-auto lg:w-1/4 pr-2 m-auto">
                            <img src={process.env.PUBLIC_URL + '/work-logos/' + props.logoUrl} alt={props.name + " logo"}/>
                        </div>
                        <div className="w-full lg:w-3/4">
                            <h1 className="text-2xl">
                                {props.name}
                            </h1>
                            <p className="text-gray-500">{props.role}</p>
                            <div>{props.description}</div>
                        </div>
                    </div>
                </div>                
            </TimelineContent>
        </TimelineItem>
    );
}