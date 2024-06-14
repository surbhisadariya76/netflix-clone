import LoginHeader from "./LoginHeader.js";
import LoginInput from "./LoginInput.js";
import LoginTopic from "./LoginTopic.js";
import LoginVideo from "./LoginVideo.js";
import LoginVideoAndContentVideo from "./LoginVideoAndContentVideo.js";
import { GrayLine } from "../utils/CentralComponents.js";
import FreelyAskedQue from "./FreelyAskedQue.js";

export default function Login() {
  return (
    <>
      <LoginHeader />
      <LoginInput />
      <GrayLine />
      <LoginVideoAndContentVideo>
        <LoginTopic
          title="Enjoy on your TV"
          description=" Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
        players and more."
        />
        <LoginVideo srcImg="./images/tv.png" srcVideo="./videos/videoTv.m4v" />
      </LoginVideoAndContentVideo>
      <GrayLine />
      <LoginVideoAndContentVideo>
        <LoginVideo srcImg="images/mobile-photo.jpg" loading />

        <LoginTopic
          title="Download your shows to watch offline"
          description="Save your favourites easily and always have something to watch."
        />
      </LoginVideoAndContentVideo>
      <GrayLine />
      <LoginVideoAndContentVideo>
        <LoginTopic
          title="Watch everywhere"
          description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        />
        <LoginVideo
          srcImg="images/device-pile-in.png"
          srcVideo="videos/video-devices-in.m4v"
        />
      </LoginVideoAndContentVideo>
      <GrayLine />
      <LoginVideoAndContentVideo>
        <LoginVideo srcImg="./images/cartoon-image.png" />
        <LoginTopic
          title="Create profiles for kids"
          description="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        />
      </LoginVideoAndContentVideo>
      <GrayLine />
      <FreelyAskedQue />
      <GrayLine />
    </>
  );
}
