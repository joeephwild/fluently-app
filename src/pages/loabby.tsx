import { useHuddleStore } from "@huddle01/huddle01-client/store";
import { getHuddleClient } from "@huddle01/huddle01-client";
import {
  HuddleIframe,
  IframeConfig,
  huddleIframeApp,
} from "@huddle01/huddle01-iframe";
import { useAddress } from "@thirdweb-dev/react";
import { useEffect, useLayoutEffect, useState } from "react";
//import MeVideoElem from "@/components/MeVideoElem";
//import { Button } from "@chakra-ui/react";

const Loabby = () => {
  const huddleClient = getHuddleClient("gfhhf");
  const [started, setStarted] = useState(false);
  const roomId = useHuddleStore((state) => state.roomState.roomId);
  const recordingState = useHuddleStore((state) => state.recordingState);
  console.log(roomId);
  const address = useAddress();
  useEffect(() => {
    huddleIframeApp.methods.connectWallet(address);
  }, [address]);

  const enableCam = () => {
    huddleClient.enableWebcam();
    setStarted(true);
  };

  const disableCam = () => {
    huddleClient.disableWebcam;
    setStarted(false);
  };

  const enableMic = () => {
    huddleClient.enableMic();
  }

  const iframeConfig: IframeConfig = {
    roomUrl: `https://iframe.huddle01.com/${roomId}`,
    height: "900px",
    width: "100%",
    noBorder: false, // false by default
  };
  return (
    <div className="min-h-screenw-full">
      <div>
            <HuddleIframe config={iframeConfig} />
        </div>
    </div>
  );
};

export default Loabby;
