import React from 'react'
import { StakeToken } from '../../../components/StakeToken';
import { ConnectEmbed } from 'thirdweb/react';
import { chain } from '../chain';
import { client } from '../client';

function page() {
    return (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}>
          <div style={{ textAlign: "center" }}>
            <ConnectEmbed
              client={client}
              chain={chain}
            />
            <StakeToken />
          </div>
        </div>
      );
}

export default page
