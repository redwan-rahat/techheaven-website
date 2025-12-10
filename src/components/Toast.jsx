

const toastStyles = {
  success: 'bg-green-500 text-white',
  error: 'bg-red-500 text-white',
  warning: 'bg-yellow-500 text-black',
  info: 'bg-blue-500 text-white',
};

export default function Toast({ message, type, onClose }) {
  return (
    <div
      className={`fixed top-4 right-4 z-50 p-4 rounded shadow-lg ${toastStyles[type]} transition-transform duration-600 transform ease-in-out`}
    >
      <div className="flex items-center gap-4 justify-between">
        <span>{message}</span>
        <button className="ml-4 font-bold" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}


/* 

const [showToast, setShowToast] = useState(false);
const [toastMessage, setToastMessage] = useState('');
const [toastType, setToastType] = useState('success');

setToastMessage('Login successful');
setToastType('success');
setShowToast(true);
setTimeout(() => {
    setShowToast(false)

}, 1500);



{showToast && (
  <Toast
    message={toastMessage}
    type={toastType}
    onClose={() => setShowToast(false)}
  />
)}

 */