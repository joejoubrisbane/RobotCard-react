import React,{useState} from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
const Card = ({robotId , id , name ,email, notes, firestore,history}) =>{

    if(robotId == undefined){
        robotId = id
    }
    const deleteRobot = ()=>{
        firestore.delete({collection:'clients',doc:id}).then(history.push('/viewRobots'))
            .catch(err=>console.log(err));

    };
    return(

        <Modal
            closeIcon
            trigger={
            <div className='bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5'>
                 <img alt='robots' src={`https://robohash.org/${robotId}?bgset=bg1&set=set3&size=100x100`}/>
                   <div>
                       <h2>{name}</h2>
                        <p>{email}</p>
                       <p>{notes}</p>
                   </div>
            </div>}>
<Modal.Header>Robot Details</Modal.Header>
    <Modal.Content image>
        <Image wrapped size='medium' src={`https://robohash.org/${robotId}?200*200`} />
        <Modal.Description>
            <Header>{name}</Header>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
            <p>{notes}</p>
            <Link className='ui button basic primary' to={`/robot/edit/${id}`}> Edit Robot</Link>
            <Button onClick={deleteRobot} negative> Delete</Button>
        </Modal.Description>
    </Modal.Content>
    </Modal>
    )
};
export default Card;