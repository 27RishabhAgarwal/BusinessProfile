import Icon from '@mdi/react';
import {
  mdiChevronDown,
  mdiContentCopy,
  mdiDownload
} from '@mdi/js';

const CardPay = () => {

  const toggleItems = (e) => {
    const items = document.querySelector('.card-pay-items');
    items.classList.toggle('show');
    e.target.closest('.card-pay')
      .querySelector('.card-pay-title .fa-chevron-down')
      .classList.toggle('rotate');
  }

  const toggleItemBody = (e) => {
    const cardItem = e.target.closest('.card-pay-item');
    const itemBody = cardItem.querySelector('.card-pay-item-body');
    const icon = cardItem.querySelector('.card-pay-item-header .fa-chevron-down');

    const isAlreadyShown = itemBody.classList.contains('show');

    // Hide all bodies and rotate icons back
    document.querySelectorAll('.card-pay-item-body').forEach(item => item.classList.remove('show'));
    document.querySelectorAll('.card-pay-item-header .fa-chevron-down').forEach(icon => icon.classList.remove('rotate'));

    // If this one wasn't open, show it
    if (!isAlreadyShown) {
      itemBody.classList.add('show');
      icon.classList.add('rotate');
    }
  }

  async function copyToClipBoard(e) {
    const text = document.querySelector('.bank-details table').innerText;
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      const dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    } finally {
      e.target.innerText = "Copied";
    }
  }

  const downloadQR = (e) => {
    const qr = e.target.closest('.card-pay-item-body').querySelector('.qr-details img');
    const a = document.createElement('a');
    a.href = qr.src;
    a.download = e.target.closest('.card-pay-item').querySelector('.card-pay-item-header h3').innerText + '.png';
    a.click();
  }

  return (
    <div className="card-pay">
      <div className="card-pay-title" onClick={toggleItems}>
        <h2>Pay Us</h2>
        <p>Pay us by clicking here</p>
        <i className="fa-chevron-down"><Icon path={mdiChevronDown} size={1.2}  color="black" /></i>
      </div>

      <div className="card-pay-items">
        <div className="card-pay-item">
          <div className="card-pay-item-header" onClick={toggleItemBody}>
            <img src="./assets/upi_logo.png" alt="" />
            <div>
              <h3>UPI Pay</h3>
              <p>Click to get QR</p>
            </div>
            <i className="fa-chevron-down"><Icon path={mdiChevronDown} size={1.2}  color="black"/></i>
          </div>
          <div className="card-pay-item-body">
            <div className="qr-details">
              <img src="./assets/upi_QR.png" alt="" />
              <div className="card-utility-button">
                <button className="btn btn-primary" onClick={downloadQR}>
                  <i><Icon path={mdiDownload} size={1} /></i>Download
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card-pay-item">
          <div className="card-pay-item-header" onClick={toggleItemBody}>
            <img src="./assets/hp_pay_logo.png" alt="" />
            <div>
              <h3>HP Pay</h3>
              <p>Click to get QR</p>
            </div>
            <i className="fa-chevron-down"><Icon path={mdiChevronDown} size={1.2}  color="black" /></i>
          </div>
          <div className="card-pay-item-body">
            <div className="qr-details">
              <img src="./assets/qrcode.png" alt="" />
              <div className="card-utility-button">
                <button className="btn btn-primary" onClick={downloadQR}>
                  <i><Icon path={mdiDownload} size={1} /></i>Download
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card-pay-item">
          <div className="card-pay-item-header" onClick={toggleItemBody}>
            <img src="./assets/pnb_logo.jpg" alt="" />
            <div>
              <h3>Bank Details</h3>
              <p>Click to get details</p>
            </div>
            <i className="fa-chevron-down"><Icon path={mdiChevronDown} size={1.2}  color="black" /></i>
          </div>
          <div className="card-pay-item-body">
            <div className="bank-details">
              <table>
                <thead>
                  <tr>
                    <th colSpan="3">Punjab National Bank</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Account Holder</th>
                    <td>:</td>
                    <td>KEDAR NATH FILLING STATION</td>
                  </tr>
                  <tr>
                    <th>Account No.</th>
                    <td>:</td>
                    <td>7531009300000110</td>
                  </tr>
                  <tr>
                    <th>IFSC Code</th>
                    <td>:</td>
                    <td>PUNB0753100</td>
                  </tr>
                  <tr>
                    <th>Branch</th>
                    <td>:</td>
                    <td>Kachhauna Patseni</td>
                  </tr>
                  <tr>
                    <th>Account Type</th>
                    <td>:</td>
                    <td>Current Account</td>
                  </tr>
                </tbody>
              </table>
              <div className="card-utility-button">
                <button className="btn btn-primary" onClick={copyToClipBoard}>
                  <i><Icon path={mdiContentCopy} size={1} /></i>Copy
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CardPay;
