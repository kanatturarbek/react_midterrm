class Database extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            db: {},
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('127.0.0.1')
    }
}