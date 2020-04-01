import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function Post({
  query
}: {
  query: { store_name: string; store_address: string };
}) {
  const { store_name = "", store_address = "" } = query || {};
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          您輸入的結果
        </Typography>
        <Box my={4}>店家名稱: {store_name}</Box>
        <Box my={4}>店家地址: {store_address}</Box>
      </Box>
    </Container>
  );
}

Post.getInitialProps = async (ctx: any) => ({
  query: ctx.query
});
