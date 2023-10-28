class Database extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            db: {},
            isLoaded: false,
        }
    }
//fetching
    componentDidMount() {
        fetch('127.0.0.1')
    }
}