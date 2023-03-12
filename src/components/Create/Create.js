import React, { useState, useRef, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { faker } from "@faker-js/faker";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";
import "./Create.scss";
import { SpotifyContext } from "Context/SpotifyContext";

const Create = (props) => {
  const schema = yup.object().shape({
    namePlaylist: yup
      .string()
      .required("Vui lòng nhập tên Playlist")
      .test(
        "check-length",
        "Vui lòng nhập trên 1 từ",
        (value) => value.split(" ").length > 1
      ),
    nameAuthor: yup.string().required("Vui lòng nhập tên tác giả"),
    email: yup
      .string()
      .required("Vui lòng nhập email")
      .email("Vui lòng nhập đúng định dạng email"),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      namePlaylist: "",
      nameAuthor: "",
      email: "",
    },
    resolver: yupResolver(schema),
  });
  const history = useHistory();
  const [isError, setIsError] = useState(false);
  const [{}, dispatch] = useContext(SpotifyContext);
  const handleSubmitForm = (data) => {
    if (isError) {
      toast.info("Thêm playlist thành công !", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      const id = faker.datatype.uuid();
      dispatch({
        type: "CREATE_PLAYLIST_ITEM",
        payload: {
          data,
          id,
        },
      });
      setTimeout(() => {
        history.push("./");
      }, 1500);
    }
  };
  const handleInputChecked = (e) => {
    if (e.target.checked) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };
  return (
    <div className="create">
      <h2>Tạo Playlist</h2>
      <Form noValidate onSubmit={handleSubmit(handleSubmitForm)}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Tên Playlist</Form.Label>
            <Controller
              name="namePlaylist"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Form.Control
                  onChange={onChange}
                  value={value}
                  type="text"
                  placeholder="Enter Name Playlist"
                />
              )}
            />
            {errors?.namePlaylist?.message && (
              <Form.Control.Feedback className="d-block" type="invalid">
                {errors.namePlaylist.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formGridPassword">
            <Form.Label>Tên tác giả</Form.Label>
            <Controller
              name="nameAuthor"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Form.Control
                  onChange={onChange}
                  value={value}
                  type="text"
                  placeholder="Enter Name Author"
                />
              )}
            />
            {errors?.nameAuthor?.message && (
              <Form.Control.Feedback className="d-block" type="invalid">
                {errors.nameAuthor.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Email</Form.Label>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Form.Control
                  onChange={onChange}
                  value={value}
                  type="text"
                  placeholder="Enter Email"
                />
              )}
            />
            {errors?.email?.message && (
              <Form.Control.Feedback className="d-block" type="invalid">
                {errors.email.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              placeholder="Enter Email"
              label="Vui lòng ấn chọn để chúng tôi biết bạn đồng ý với điều khoản"
              onChange={(e) => handleInputChecked(e)}
            />
            {!isError && (
              <Form.Control.Feedback className="d-block" type="invalid">
                Bắt buộc chọn điều khoản
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

Create.propTypes = {};

export default Create;
