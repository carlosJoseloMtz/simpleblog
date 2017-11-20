import { h, Component } from 'preact';
import style from './style';
import { formatDate } from '../../lib/utils.js'


const MOCKED_PUB = [
    {
        id: 'smeid',
        title: 'some randome title',
        date: new Date()
    },
    {
        id: 'smeid',
        title: 'some randome title',
        date: new Date()
    }
]


export default class PublicationSummary extends Component {
    state = {
        publications: []
    }

    componentDidMount () {
        console.log('loading the publications for user', this.props.user)
        this.setState({
            publications: MOCKED_PUB
        })
    }

    getContent (publications) {
        if (publications.length === 0) {
            return <div>No publications yet!</div>
        }

        return (
            <div>
                Searching for publications for user {this.props.user}
                <br />
                {
                    publications.map(pb => {
                        return (
                            <div>
                                <a href={`/posts/${pb.id}`}>{pb.title} - {formatDate(pb.date)}</a>
                            </div>
                        )
                    }) 
                }
            </div>
        )
    }

    render ({ user }, { publications }) {
        return this.getContent(publications)
    }
}

