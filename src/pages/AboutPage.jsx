import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About This Project</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit corporis expedita quibusdam quae, tempore sed quisquam impedit qui praesentium assumenda?</p>
                
                <p>Version 1.0.0</p>
                <p>
                    <Link to="/">Back to home</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage
