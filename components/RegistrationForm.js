const React = require('react')

class RegistrationForm extends React.Component{
  render(){
    return (
      <form>
        <input type='text' name='hi'/>
        <input type='password' name='hi'/>
        <button type='submit'/>
      </form>
    );
  }
}



module.exports = RegistrationForm
