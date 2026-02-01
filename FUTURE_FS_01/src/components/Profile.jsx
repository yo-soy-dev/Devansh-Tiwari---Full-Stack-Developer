import React from 'react'

const Profile = () => {
  return (
    <div>
      <motion.img
        src="/projects/profile.png"
        alt="Hero visual"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/2 right-10 -translate-y-1/2 w-80 hidden lg:block pointer-events-none rounded-xl shadow-2xl"
      />
    </div>
  )
}

export default Profile
