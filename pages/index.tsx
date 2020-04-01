import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          店家疫情追蹤系統
        </Typography>
        <form method="get" action="/post">
          <TextField
            id="store_name"
            name="store_name"
            label="店家名稱"
            fullWidth
          />
          <TextField
            id="store_address"
            name="store_address"
            label="店家地址"
            fullWidth
          />
          <Box my={4}>
            <Button variant="contained" type="button">
              清除
            </Button>
            <Button variant="contained" color="primary" type="submit">
              送出
            </Button>
          </Box>
        </form>
        <ProTip />
      </Box>
    </Container>
  );
}
