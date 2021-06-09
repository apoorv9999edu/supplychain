//(register/login/logout actions)
import {
    PREGISTER_SUCCESS,
    PREGISTER_FAIL,
    PLOGIN_SUCCESS,
    PLOGIN_FAIL,
    PLOGOUT,
    PSET_MESSAGE,
    
    MREGISTER_SUCCESS,
    MREGISTER_FAIL,
    MLOGIN_SUCCESS,
    MLOGIN_FAIL,
    MLOGOUT,
    MSET_MESSAGE,
    
    BREGISTER_SUCCESS,
    BREGISTER_FAIL,
    BLOGIN_SUCCESS,
    BLOGIN_FAIL,
    BLOGOUT,
    BSET_MESSAGE,

    HREGISTER_SUCCESS,
    HREGISTER_FAIL,
    HLOGIN_SUCCESS,
    HLOGIN_FAIL,
    HLOGOUT,
    HSET_MESSAGE,

    SET_MESSAGE
  } from "./types";
  
  import AuthService from "../services/auth.service";
  //beneficiary
  export const bregister = (bname,buid, bemail, bpassword,bage) => (dispatch) => {
    console.log("insidebregister");
    
    return AuthService.bregister(bname,buid, bemail, bpassword,bage).then(
      (response) => {
        dispatch({
          type: BREGISTER_SUCCESS,
        });
  
        dispatch({
          type: BSET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: BREGISTER_FAIL,
        });
  
        dispatch({
          type: BSET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const blogin = (busername, bpassword,brole) => (dispatch) => {
    return AuthService.blogin(busername, bpassword,brole).then(
      (data) => {
        dispatch({
          type: BLOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: BLOGIN_FAIL,
        });
  
        dispatch({
          type: BSET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const blogout = () => (dispatch) => {
    AuthService.blogout();
  
    dispatch({
      type: BLOGOUT,
    });
  };




//=============================================
  //PHYSICIAN



  
  export const pregister = (pname,puid, pemail, ppassword,pvalue) => (dispatch) => {
    return AuthService.pregister(pname,puid, pemail, ppassword,pvalue).then(
      (response) => {
        dispatch({
          type: PREGISTER_SUCCESS,
        });
  
        dispatch({
          type: PSET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: PREGISTER_FAIL,
        });
  
        dispatch({
          type: PSET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const plogin = (pusername, ppassword ,prole) => (dispatch) => {
    return AuthService.plogin(pusername, ppassword ,prole).then(
      (data) => {
        dispatch({
          type: PLOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: PLOGIN_FAIL,
        });
  
        dispatch({
          type: PSET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const plogout = () => (dispatch) => {
    AuthService.plogout();
  
    dispatch({
      type: PLOGOUT,
    });
  };





//=============================================




//handler

export const hregister = (hname,huid, hemail, hpassword,hrole) => (dispatch) => {
  return AuthService.hregister(hname,huid, hemail, hpassword,hrole).then(
    (response) => {
      dispatch({
        type: HREGISTER_SUCCESS,
      });

      dispatch({
        type: HSET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: HREGISTER_FAIL,
      });

      dispatch({
        type: HSET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const hlogin = (husername, hpassword ,hrole) => (dispatch) => {
  return AuthService.hlogin(husername, hpassword ,hrole).then(
    (data) => {
      dispatch({
        type: HLOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: HLOGIN_FAIL,
      });

      dispatch({
        type: HSET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const hlogout = () => (dispatch) => {
  AuthService.hlogout();

  dispatch({
    type: HLOGOUT,
  });
};

//manufacturer====================================================================================================

export const mregister = (mname,muid, memail, mpassword,mmed) => (dispatch) => {
  return AuthService.bregister(mname,muid, memail, mpassword,mmed).then(
    (response) => {
      dispatch({
        type: MREGISTER_SUCCESS,
      });

      dispatch({
        type: MSET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: MREGISTER_FAIL,
      });

      dispatch({
        type: MSET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const mlogin = (musername, mpassword ,mrole) => {
  return AuthService.mlogin(musername, mpassword ,mrole).then(
    (data) => {
      dispatch({
        type: MLOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: MLOGIN_FAIL,
      });

      dispatch({
        type: MSET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const mlogout = () => (dispatch) => {
  AuthService.mlogout();

  dispatch({
    type: MLOGOUT,
  });
};


