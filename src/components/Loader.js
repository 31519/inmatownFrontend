import React from "react";





const Loaders = () => {
  return (
    
      <div className={classes.loaderWrapper}>
        {/* <CircularProgress
        color="primary" /> */}
        <div className={classes.loader}>
          <div className={classes.loaderInner}></div>
        </div>
      </div>
    
  );
};

export default Loaders;
