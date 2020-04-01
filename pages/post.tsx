import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import qs from "query-string";

export default function Post({ query }: { query: Object }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(`${window.location.origin}/result?${qs.stringify(query)}`);
  }, []);
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          請掃描 QR Code
        </Typography>
        {url && (
          <img
            alt="qr code"
            src={`http://chart.apis.google.com/chart?cht=qr&chl=${encodeURIComponent(
              url
            )}&chs=450`}
          />
        )}
      </Box>
    </Container>
  );
}

Post.getInitialProps = async (ctx: any) => ({
  query: ctx.query
});
