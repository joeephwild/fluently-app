import { useHuddleStore } from "@huddle01/huddle01-client/store";
import {
  HuddleIframe,
  IframeConfig,
  huddleIframeApp,
} from "@huddle01/huddle01-iframe";
import { useAddress } from "@thirdweb-dev/react";
import { useEffect, useLayoutEffect } from "react";



const Loabby = () => {
  const roomId = useHuddleStore(state => state.roomState.roomId);
  console.log(roomId)
  const address = useAddress()
  useEffect(() => {
    huddleIframeApp.methods.connectWallet(address);
  }, [address]);

  const iframeConfig: IframeConfig = {
    roomUrl: `https://iframe.huddle01.com/${roomId}`,
    height: "900px",
    width: "100%",
    noBorder: false, // false by default
  };
  return (
    <div>
      <HuddleIframe config={iframeConfig} />
    </div>
  );
};

export default Loabby;
