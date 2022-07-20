export const Modal = ({ data }) => {
  
  // console.log(JSON.stringify(data));
  return (
    <div id="modal-id" className="modal modal-fx-fadeInScale">
      <div className="modal-background" />
      <div className="modal-content">
        <form>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
            <p className="help">Füllen Sie dieses Feld aus.</p>
          </div>
          <div className="field">
            <label className="label">E-Mail</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
            <p className="help">Füllen Sie dieses Feld aus.</p>
          </div>
          <div className="field">
            <label className="label">Experience_label</label>
            <div className="control">
              {/* <input className="input" type="text" placeholder="Text input" /> */}
            </div>
            {/* <p className="help">Füllen Sie dieses Feld aus.</p> */}
          </div>
          <div className="field">
            <label className="label">Date</label>
            <div className="control">
              <input className="input" type="date" placeholder="Date input" />
            </div>
            {/* <p className="help">Füllen Sie dieses Feld aus.</p> */}
          </div>
        </form>
      </div>
      <button className="modal-close is-large" aria-label="close">
        {/* <Button
                        url={data.request_button}
                        title={data.request_button}
                    /> */}
      </button>
    </div>
  );
};
