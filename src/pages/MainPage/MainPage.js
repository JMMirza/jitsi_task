import React, { useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { FaMicrophone } from "react-icons/fa";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { TbScreenShare, TbHandStop } from "react-icons/tb";
import { ImPhoneHangUp } from "react-icons/im";
import { useLocation, useNavigate } from "react-router-dom";

export default function MainPage() {
  const route = useLocation();
  let apiObj = null;
  const navigate = useNavigate()
  useEffect(() => {
    jistimeeting(route.state.room_no, route.state.name)
  }, [])


  function jistimeeting(room_no, name) {
    const domain = 'jitsi.bt-ho.com';

    //var roomName = 'newRoome_' + (new Date()).getTime();

    const options = {
      roomName: room_no,
      width: '100%',
      height: '100%',
      parentNode: document.querySelector('.jitsi_div'),
      userInfo: {
        displayName: name
      },
      configOverwrite: {
        doNotStoreRoom: true,
        startVideoMuted: 0,
        startWithVideoMuted: true,
        startWithAudioMuted: true,
        enableWelcomePage: false,
        prejoinPageEnabled: false,
        disableRemoteMute: true,
        remoteVideoMenu: {
          disableKick: true
        },
      },
      interfaceConfigOverwrite: {
        filmStripOnly: false,
        SHOW_JITSI_WATERMARK: false,
        SHOW_BRAND_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,
        DEFAULT_REMOTE_DISPLAY_NAME: 'New User',
        TOOLBAR_BUTTONS: []
      },

    };
    apiObj = new window.JitsiMeetExternalAPI(domain, options);
    apiObj.addEventListeners({
      readyToClose: function () {
        //alert('going to close');
        // $('#jitsi-meet-conf-container').empty();
        // $('#toolbox').hide();
      },
      audioMuteStatusChanged: function (data) {
        // if (data.muted)
        // $("#btnCustomMic").text('Unmute');
        // else
        // $("#btnCustomMic").text('Mute');
      },
      videoMuteStatusChanged: function (data) {
        // if (data.muted)
        //     $("#btnCustomCamera").text('Start Cam');
        // else
        //     $("#btnCustomCamera").text('Stop Cam');
      },
      tileViewChanged: function (data) {

      },
      screenSharingStatusChanged: function (data) {
        // if (data.on)
        //     $("#btnScreenShareCustom").text('Stop SS');
        // else
        //     $("#btnScreenShareCustom").text('Start SS');
      },
      participantJoined: function (data) {
        console.log('participantJoined', data);
      },
      participantLeft: function (data) {
        console.log('participantLeft', data);
      }
    });

    apiObj.executeCommand('subject', 'New Room 2');
  }

  function mute() {
    apiObj.executeCommand('toggleAudio');
  }

  function hangup() {
    apiObj.executeCommand('hangup');
    navigate('/');
  }

  function video() {
    apiObj.executeCommand('toggleVideo');
  }

  function shareScreen() {
    apiObj.executeCommand('toggleShareScreen');
  }

  function handRaise() {
    apiObj.executeCommand('toggleRaiseHand');
  }
  return (
    <div>
      <div className="main-page-container">
        <Container>
          <Row className="wrapper">
            <Col className=" main-section">
              <Row className="card-w jitsi_div">
                {/* <UserCard /> */}
                {/* <div id="jisti_div"></div> */}
              </Row>
            </Col>
            <Col className="bottom-bar">
              <Button variant="primary" className="icon-body" onClick={mute}>
                <FaMicrophone />
              </Button>
              <Button variant="primary" className="icon-body" onClick={video}>
                <VscDeviceCameraVideo />{" "}
              </Button>
              {/* <Button variant="primary" className="icon-body">
                <FaRegHandPaper />{" "}
              </Button> */}
              <Button variant="primary" className="icon-body" onClick={shareScreen}>
                <TbScreenShare />
              </Button>
              <Button variant="primary" className="icon-body" onClick={handRaise}>
                <TbHandStop />
              </Button>
              <Button variant="primary" className="icon-body hangup" onClick={hangup}>
                <ImPhoneHangUp />
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
