import { h, Component } from 'preact';
import style from './style';

import PublicationSummary from '../../components/publicationsummary'


const Profile = ({ user }) => {
    return (
        <div class={style.profile}>
            <h1>Juan Paco Pedro de la Mar</h1>
            <div class={style.biography}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet auctor augue. Vivamus justo ante, aliquet sed turpis at, accumsan sodales elit. Ut vel interdum quam. Proin neque augue, ullamcorper eu tortor id, aliquet fringilla augue. Phasellus vitae suscipit massa. Pellentesque nisi leo, consectetur eget tortor id, pellentesque mollis dolor. Sed vulputate magna id quam interdum pellentesque ac nec nunc. Nunc mollis vitae dolor ac mollis. Suspendisse euismod ultrices augue ac faucibus. Nunc lobortis augue non massa tristique luctus.
<br />
<br />
Etiam in ultricies diam. Ut vel augue ligula. Curabitur egestas lectus sed justo dignissim, a accumsan purus sodales. Proin ullamcorper ante vitae nisi sodales auctor. Phasellus mattis, neque eget hendrerit posuere, nisl mauris dapibus tortor, et tempus nisl odio in ligula. Duis ut purus et ligula volutpat viverra vel at orci. Nulla nisl velit, fermentum sed nunc quis, ornare semper mauris. Cras porta scelerisque dapibus. Nulla consequat erat quis luctus ornare. Praesent egestas tempor condimentum.
<br />
<br />
Fusce ac suscipit lorem. Donec est est, mattis in cursus sed, placerat vitae diam. Aliquam a iaculis est, non interdum sem. Etiam nec vestibulum lacus. Etiam elementum, quam et placerat tristique, ex lorem mattis lacus, ultricies tempus nisi nibh quis purus. Suspendisse sit amet auctor tellus. Duis nec ligula congue, porttitor arcu ac, bibendum nisl. Praesent faucibus pulvinar sem vel condimentum. Praesent sagittis pellentesque convallis.

Nulla quis nisl vel tellus pellentesque tincidunt feugiat vitae magna. Proin gravida consectetur nisi eget molestie. Vivamus gravida vehicula pulvinar. Mauris feugiat vehicula odio, quis pulvinar ligula. Proin ut leo bibendum, porta quam eu, blandit mi. Integer bibendum nunc urna, et lacinia erat congue sit amet. Ut egestas risus at enim interdum, fringilla vehicula arcu viverra.
<br />
<br />
Donec accumsan sem at lectus sodales, quis vulputate tellus convallis. Suspendisse magna lacus, imperdiet sit amet mauris tempor, volutpat pretium nisl. Morbi odio risus, lacinia eu neque vel, faucibus mollis nunc. Duis id ligula eget odio pretium viverra. Cras vitae est nulla. Vestibulum vehicula scelerisque lectus, sed scelerisque turpis ornare nec. Cras tincidunt vel nibh et tempus. Mauris laoreet nisi eu dui elementum, pulvinar mattis neque tincidunt. Sed viverra ultricies gravida. Suspendisse congue felis in pretium iaculis. Curabitur bibendum euismod tortor vel volutpat. Donec aliquet vitae diam quis aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque congue metus lacus, a lobortis turpis feugiat non.
            </div>
            <br />
            <hr />
            <h2>Publications</h2>
            <br />
            <hr />
            <PublicationSummary user={user} />
        </div>
    )
}


export default Profile
