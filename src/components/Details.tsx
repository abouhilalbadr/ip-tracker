const Details = ({ location }: any) => {

  const setLocation = () => {
    return `${location.location.city}, ${location.location.region} ${location.location.postalCode}`
  }

  return (
    <div className="container mx-auto p-4">
      <div className="py-8 bg-white shadow-xl relative -top-16 rounded-xl z-50">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* IP Address */}
          <div className="border-r border-gray-300 flex flex-col gap-2 px-8">
            <h2 className="text-sm tracking-widest font-medium text-gray-dg">IP ADDRESS</h2>
            <span className="text-gray-vdg font-bold text-2xl">{location.ip}</span>
          </div>
          {/* Location */}
          <div className="border-r border-gray-300 flex flex-col gap-2 px-8">
            <h2 className="text-sm tracking-widest font-medium text-gray-dg">LOCATION</h2>
            <span className="text-gray-vdg font-bold text-2xl">{setLocation()}</span>
          </div>
          {/* Timezone */}
          <div className="border-r border-gray-300 flex flex-col gap-2 px-8">
            <h2 className="text-sm tracking-widest font-medium text-gray-dg">TIMEZONE</h2>
            <span className="text-gray-vdg font-bold text-2xl">UTC {location.location.timezone}</span>
          </div>
          {/* ISP */}
          <div className="flex flex-col gap-2 px-8">
            <h2 className="text-sm tracking-widest font-medium text-gray-dg">ISP</h2>
            <span className="text-gray-vdg font-bold text-2xl">{location.isp}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details