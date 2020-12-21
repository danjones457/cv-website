import Paper from '@material-ui/core/Paper';

export default function Content(props) {
    return (
        <Paper elevation={3} className="lg:flex p-2">
            <div className="w-3/4 lg:w-1/4 pr-2 lg:m-auto">
                <img src={process.env.PUBLIC_URL + '/work-logos/' + props.logoUrl} />
            </div>
            <div className="w-full lg:w-3/4">
                <h1 className="text-2xl">
                    {props.companyName}
                </h1>
                <p className="text-gray-500">{props.role}</p>
                <p>{props.description}</p>
            </div>
        </Paper>
    );
}