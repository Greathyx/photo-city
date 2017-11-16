/**
 * Created by hyx on 2017/10/6.
 */

import React from 'react';
import {connect} from 'dva';
import styles from './css/SignUpPage.css';
import imgLogo from '../assets/graphics/logo.png';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import Snackbar from 'material-ui-next/Snackbar';
import {img} from 'antd';
import {message} from 'antd';


const material_styles = {
  hintStyle: {
    color: '#666666',
  },
  errorStyle: {
    color: '',
  },
  underlineStyle: {
    borderColor: '#666666',
  },
  underlineFocusStyle: {
    // borderColor: '#245168',
    borderColor: '#00897b',
  },
  floatingLabelStyle: {
    color: '#333333',
  },
  floatingLabelFocusStyle: {
    // color: '#245168',
    color: '#00897b',
  },
  buttonColorStyle: {
    color: '#ffffff',
  }
};

const window_height = document.documentElement.clientHeight;
const window_width = document.documentElement.clientWidth;
const bg_width = window_width / 1500 * 600; //背景图中拼图在页面中显示的宽度
const register_form_width = 400; //注册表单的宽度，规定在SignUpPage.css文件中
const register_form_height = 465; //注册表单的高度，规定在SignUpPage.css文件中
const paper_height = 600;
const paper_width = 500;

class SignUpPage extends React.Component {

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  state = {
    openTerms: false,
    openPrivacyPolicy: false,
    showPassword: false,
    openSnackBar: false,
    hint: ''
  };

  // 隐藏密码
  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  // 显示密码
  handleClickShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword});
  };

  handleOpenTerms = () => {
    this.setState({openTerms: true});
  };

  handleCloseTerms = () => {
    this.setState({openTerms: false});
  };

  handleOpenPrivacyPolicy = () => {
    this.setState({openPrivacyPolicy: true});
  };

  handleClosePrivacyPolicy = () => {
    this.setState({openPrivacyPolicy: false});
  };

  handleRequestCloseSnackBar = () => {
    this.setState({openSnackBar: false});
  };

  // 注册按钮监听
  handleRegister = () => {
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    const checkEmail = /^(?:\w+\.?)*\w+@(?:\w+\.)*\w+$/;
    if (!checkEmail.test(email)) {
      if (email === '') {
        // this.setState({
        //   openSnackBar: true,
        //   hint: 'Please type in your email address.',
        // });
        message.error('Please type in your email address.');
      }
      else {
        // this.setState({
        //   openSnackBar: true,
        //   hint: 'Please type in a valid email address.',
        // });
        message.error('Please type in a valid email address.');
      }
    }

    else if (username === '') {
      // this.setState({
      //   openSnackBar: true,
      //   hint: 'Please type in your username.',
      // });
      message.error('Please type in your username.');
    }

    else if (password === '') {
      // this.setState({
      //   openSnackBar: true,
      //   hint: 'Please type in your password.',
      // });
      message.error('Please type in your password.');
    }

    else {
      const param = {
        username: username,
        email: email,
        password: password,
      };

      this.props.dispatch({
        type: 'authentication/register',
        payload: {
          ...param,
        },
      });
    }
  };

  render() {

    const actions_term = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleCloseTerms}
        labelStyle={material_styles.flatButtonLabelStyle}
      />
    ];

    const actions_privacyPolicy = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClosePrivacyPolicy}
        labelStyle={material_styles.flatButtonLabelStyle}
      />
    ];

    const {openSnackBar, hint} = this.state;

    return (
      <div className={"col s12 m12 l12 valign-wrapper " + styles.mainContent}>
        <Paper zDepth={1} className={styles.paper}>
          <div className={styles.sign_up_form}
               style={{
                 marginLeft: (paper_width - register_form_width) / 2,
                 paddingTop: (paper_height - register_form_height) / 2
               }}>

            <div className={styles.logo_div}>
              <img src={imgLogo} className={styles.img_logo}/>
            </div>
            <div className={styles.title}>
              Join
            </div>

            <div className="row" style={{textAlign: 'left'}}>
              <div className="input-field col s12">
                <input id="email" type="email" className="validate"/>
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input id="username" type="text" className="validate"/>
                <label htmlFor="username">Username</label>
              </div>
              <div className="input-field col s12">
                <input
                  id="password"
                  type={this.state.showPassword ? 'text' : 'password'}
                  className="validate col s10"
                />
                <label htmlFor="password">Password</label>
                <IconButton
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                  className="col s2"
                >
                  {this.state.showPassword ? <VisibilityOff/> : <Visibility/>}
                </IconButton>
              </div>
            </div>

            <FlatButton
              label="Join"
              fullWidth={true}
              backgroundColor="#000000"
              hoverColor="#00897b"
              labelStyle={material_styles.buttonColorStyle}
              onClick={this.handleRegister}
              // style={{marginTop: 20}}
            /><br/>
            <div className={styles.terms}>
              By joining, you agree to the <a className={styles.link} onClick={this.handleOpenTerms}>Terms</a> and <a
              className={styles.link} onClick={this.handleOpenPrivacyPolicy}>Privacy
              Policy</a>.
            </div>
          </div>
        </Paper>

        <Snackbar
          anchorOrigin={{vertical: 'top', horizontal: 'center'}}
          open={openSnackBar}
          onRequestClose={this.handleRequestCloseSnackBar}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{hint}</span>}
        />

        <Dialog
          title="Terms"
          actions={actions_term}
          modal={false}
          open={this.state.openTerms}
          onRequestClose={this.handleCloseTerms}
          autoScrollBodyContent={true}
        >
          <div>
            <br/>
            Photo City is a photo discovery platform for free to use, high-definition photos. We operate the Photo
            City website at PhotoCity.com (the “Site”) and all related websites, software, mobile apps, and other
            services that we provide (together, the “Service”) with the goal of celebrating and enabling contributors
            and fostering creativity in our community. Your use of the Service, and our provision of the Service to
            you, constitutes an agreement by you and Photo City to be bound by the terms and conditions in these Terms
            of Service.
            <br/><br/>

            PLEASE READ THESE TERMS OF SERVICE CAREFULLY. BY REGISTERING FOR OR OTHERWISE USING THE SERVICE, YOU ARE
            TELLING US THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE, INCLUDING OUR
            PRIVACY POLICY (TOGETHER, THESE “TERMS”). If you don’t agree with anything we propose in these Terms,
            please don’t (and you don’t have our permission to) use any part of the Service.
            <br/><br/>

            THIS PART IS REALLY IMPORTANT: These Terms require that if we get into a dispute with you relating to the
            Service (or vice versa), the dispute will be resolved by BINDING ARBITRATION. This means that YOU AGREE TO
            GIVE UP YOUR RIGHT TO GO TO COURT TO SUE US (OR BE SUED BY US) UNDER THIS CONTRACT (except for some
            disputes that can be taken to small claims court). Our disputes will be determined by a NEUTRAL ARBITRATOR
            and NOT A JUDGE OR JURY and you cannot start or join a class action lawsuit. Have a very careful read
            through Section 18 for the actual details regarding our agreement to arbitrate, which we’ve tried to make
            fair to our users.
          </div>
        </Dialog>

        <Dialog
          title="Privacy Policy"
          actions={actions_privacyPolicy}
          modal={false}
          open={this.state.openPrivacyPolicy}
          onRequestClose={this.handleClosePrivacyPolicy}
          autoScrollBodyContent={true}
        >
          <div>
            <br/>
            At Photo City, we recognize the need to protect the privacy of the personal
            information we collect or you provide to us when you access and use our website (PhotoCity.com) (the
            “Website”).
            <br/><br/>

            Therefore, we have adopted this privacy policy (the “Privacy Policy”), which sets forth, among other
            things, the type of information that will be collected, the purpose and use of the collected information,
            and your rights with regard to the collected information. By accessing the Website, you are consenting to
            the collection and the use of your information by Company, but only to the extent described herein. Should
            you wish to revoke your consent, you may do so in accordance with the provisions of Section 4 below.
            <br/><br/>

            1. Protection of Your Information<br/>
            We are accountable for the information in our custody. Therefore, when we collect or use your information,
            we will utilize commercially reasonable safeguards to ensure its protection. It should be noted that no
            security procedure is currently 100% effective. Should any breach of your Personal Information occur, we
            will inform you as soon as reasonably possible, as required by applicable law.
            <br/><br/>

            2. Type and Purpose of Collection<br/>
            We collect information at various points in the Website to facilitate its use by our customers.<br/>
            Specifically, two types of information are collected:
            <br/><br/>

            Non-Personal Information: Upon accessing the Website, certain non-personal information will be
            automatically collected without your knowledge or consent, such as your IP address and the referring
            website (“Non-Personal Information”). We use Non-Personal Information to examine our traffic and to view
            how our customers use the Website. This type of information will not allow you to be personally
            identified. For example, we use “cookies”, which contains only certain statistical information. You can
            instruct your computer to inform you whenever a cookie is being sent, or you can disallow cookies through
            your web browser. If you do choose to disallow cookies, your experience on the Website may be diminished,
            or your ability to choose some of the options on the Website may be limited.
            <br/><br/>

            Identifying Personal Information: To utilize some portions of the Website or some of the services provided
            therein, you may be required to first provide personal information that will allow you to be identified
            (“Personal Information”). This type of information will not be collected without your consent. The
            purposes of the collection of Personal Information are the following:
            <br/><br/>

            i. To establish a relationship with you;
            <br/><br/>

            ii. To facilitate your service through our Website;
            <br/><br/>

            iii. To facilitate your service with our affiliated service providers;
            <br/><br/>

            iv. To allow you to post a picture on the Website, and to identify you as having posted a picture on the
            Website;
            <br/><br/>

            v. To anticipate and resolve problems with your service;
            <br/><br/>

            vi. To understand your needs and desires vis-à-vis the Website;
            <br/><br/>

            vii. To update you on changes to our services or products, including new promotions.
            <br/><br/>

            We expressly acknowledge that we will not use your Personal Information for any other purposes without
            your consent. Further, we will only collect Personal Information to the extent necessary for the
            abovementioned purposes. The Personal Information we collect will vary depending on how you are using the
            Website, but may include, without limitation, your address, phone number, email address and credit card
            information.
            <br/><br/>

            3. Right to Examine Information<br/>
            You have the right to examine any of your Personal Information that we collect. Should you wish to examine
            such information, please send us a written request to support@unsplash.com. We reserve the right to charge
            you a reasonable administrative fee to access your information, as permitted by applicable law. In certain
            cases we may not be able to provide you with access to all of your Personal Information (ex: if the
            information also pertains to the Personal Information of another user).
            <br/><br/>

            4. Withdrawal of Consent<br/>
            You may withdraw your consent to the collection of Personal Information at any time by sending a written
            request to support@unsplash.com. Upon receiving notice that you have revoked your consent, we will stop
            using your Personal Information within a reasonable time, which will vary depending on what information we
            have collected and for what purpose. Please note that we will send you an email confirmation upon receipt
            of your request. Therefore, if you do not receive a confirmation email, please contact us again with your
            request. If you do choose to withdraw such consent, your experience on the Website may be diminished, or
            your ability to choose some of the options on the Website or the services provided therein may be limited.
            <br/><br/>

            5. Sharing Information<br/>
            We will not sell, rent or disclose to outside parties the information we collect, save and except that we
            may share the collected information with other parties as follows:
            <br/><br/>

            A. Affiliated Service Providers: We have agreements with various affiliated service providers to
            facilitate
            the functioning of the Website, with whom we may share the information we have collected. For example, we
            may share your credit card information with the credit card service provider to process your purchase. All
            administrative service providers that we use are required to have the same level of privacy protection as
            we have, and therefore we expect that your information will be handled with the same level of care that we
            employ.
            <br/><br/>

            B. Where required by law: We may share the collected information where required by law, specifically in
            response to a demand from government authorities where such demand meets the legal requirements.
            <br/><br/>

            C. Statistical Analysis: We may share Non-Personal Information and aggregated information with third
            parties
            for advertising or marketing purposes. No Personal Information will be shared in this manner.
            <br/><br/>

            D. Transactions: In connection with, or during negotiations of, any merger, sale of company assets,
            financing
            or acquisition, or in any other situation where collected information may be disclosed or transferred as
            one of our business assets.
            <br/><br/>

            6. External Links<br/>
            The Website contains links and references to other websites. We are not responsible for the collection,
            use and disclosure of information, or the privacy practices of such websites, and we expressly disclaim
            any liability relating thereto.
            <br/><br/>

            7. International Transfer<br/>
            Your information may be transferred to and maintained on computers located outside of your jurisdiction,
            where privacy laws may not be as protective as your jurisdiction. Your consent to this Privacy Policy
            represents your consent to any such transfer.
            <br/><br/>

            8. Terms of Use<br/>
            This Privacy Policy is incorporated into and forms part of the Terms of Use, which outlines the terms and
            conditions you agree to when accessing and using the Website, and which can be found at unsplash.com/terms
            <br/><br/>

            9. Persons Under 18<br/>
            The Website is not marketed toward persons under the age of 18. If Company discovers that it has
            inadvertently collected Personal Information about individuals under the age 18, it will promptly delete
            such information.
          </div>
        </Dialog>
      </div>
    );
  }
}

SignUpPage.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

function mapStateToProps({authentication}) {
  return {
    authentication,
  };
}

export default connect(mapStateToProps)(SignUpPage);
