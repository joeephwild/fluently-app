import React from "react";
import { HuddleIframe, IframeConfig } from "@huddle01/huddle01-iframe";
import { Box, Grid } from "@chakra-ui/react";
import { usePeers } from '@huddle01/react/hooks';

const video: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {peerIds} = usePeers()
  const iframeConfig: IframeConfig = {
    roomUrl: `https://iframe.huddle01.com/${peerIds}`,
    height: "900px",
    width: "100%",
    noBorder: true, // false by default
  };
  return (
    <div>
      <HuddleIframe config={iframeConfig} />
    </div>
  );
};

export default video;
