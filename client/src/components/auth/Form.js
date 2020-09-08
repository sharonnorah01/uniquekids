import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Forms = (props) => {
    <Form>
      <FormGroup>
        <Label for="Email">Email</Label>
        <Input
          type="email"
          name="email"
          id="Email"
          placeholder="with a placeholder"
        />
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input
            type="password"
            name="password"
            id="Password"
            placeholder="password"
          />
        </FormGroup>
      </FormGroup>
    </Form>;
    
}
export default Forms