export default function Map() {
  return (
    <div className="h-[300px] w-full rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8839220620604!2d80.25517531482233!3d13.056855090808691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2eaf8298f3992e61%3A0x7251124888fb7208!2sOwaise%20%26%20Associates!5e0!3m2!1sen!2sin!4v1625641411684!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

