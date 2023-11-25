import vid from './assets/large_2x.mp4';

const VidComp = (props)=>{
    return(
        <video className="video" src={vid} autoPlay={true} muted={true}></video>
    );
}

export default VidComp;