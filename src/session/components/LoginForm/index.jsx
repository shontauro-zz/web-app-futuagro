import './LoginForm.scss'

import React from 'react'
import PropTypes from 'prop-types'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values from', values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <div className="login-form-container">
          <img src="./images/lg_futuagro_color.png" alt="futuagro-logo" />
          <h2 className="title">Bienvenido a Futuagro</h2>

          <Form
            layout="vertical"
            onSubmit={this.handleSubmit}
            className="login-form"
          >
            <p>Por favor inicia sesión para continuar</p>
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'El correo electronico no es valido'
                  },
                  {
                    required: true,
                    message: 'Por favor ingrese su correo electronico'
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25' }} />
                  }
                  placeholder="Email"
                />
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Por favor ingrese su contraseña' }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="Contraseña"
                />
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox style={{ display: 'block' }}>Recordarme</Checkbox>)}
              <Button
                type="primary"
                htmlType="submit"
                block
                className="submit-btn"
              >
                INICIAR SESIÓN
              </Button>
              ¿No tienes una cuenta?. <a href="/">Crear cuenta.</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

LoginForm.propTypes = {
  form: PropTypes.node.required
}

export default Form.create({ name: 'login_form' })(LoginForm)
