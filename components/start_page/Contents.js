import CustomImage from "./CustomImage"

function Contents() {

  const img_title_desc_list = [
    ["Netflix", "3Fr./mese", "https://scontent.fzrh1-1.fna.fbcdn.net/v/t31.18172-8/13433361_1740390689560027_1412455068554723563_o.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=u-hEranSdIEAX8TOqsy&_nc_ht=scontent.fzrh1-1.fna&oh=00_AT-P31vH5xLxUUOUHepXD3wlzabRjLaZ5NFXUge5ubzFMQ&oe=6241DFF5"],
    ["Netflix", "3Fr./mese", "https://scontent.fzrh1-1.fna.fbcdn.net/v/t31.18172-8/13433361_1740390689560027_1412455068554723563_o.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=u-hEranSdIEAX8TOqsy&_nc_ht=scontent.fzrh1-1.fna&oh=00_AT-P31vH5xLxUUOUHepXD3wlzabRjLaZ5NFXUge5ubzFMQ&oe=6241DFF5"],
    ["Netflix", "3Fr./mese", "https://scontent.fzrh1-1.fna.fbcdn.net/v/t31.18172-8/13433361_1740390689560027_1412455068554723563_o.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=u-hEranSdIEAX8TOqsy&_nc_ht=scontent.fzrh1-1.fna&oh=00_AT-P31vH5xLxUUOUHepXD3wlzabRjLaZ5NFXUge5ubzFMQ&oe=6241DFF5"],
    ["Netflix", "3Fr./mese", "https://scontent.fzrh1-1.fna.fbcdn.net/v/t31.18172-8/13433361_1740390689560027_1412455068554723563_o.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=u-hEranSdIEAX8TOqsy&_nc_ht=scontent.fzrh1-1.fna&oh=00_AT-P31vH5xLxUUOUHepXD3wlzabRjLaZ5NFXUge5ubzFMQ&oe=6241DFF5"],
    ["Netflix", "3Fr./mese", "https://scontent.fzrh1-1.fna.fbcdn.net/v/t31.18172-8/13433361_1740390689560027_1412455068554723563_o.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=u-hEranSdIEAX8TOqsy&_nc_ht=scontent.fzrh1-1.fna&oh=00_AT-P31vH5xLxUUOUHepXD3wlzabRjLaZ5NFXUge5ubzFMQ&oe=6241DFF5"],
    ["Netflix", "3Fr./mese", "https://scontent.fzrh1-1.fna.fbcdn.net/v/t31.18172-8/13433361_1740390689560027_1412455068554723563_o.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=u-hEranSdIEAX8TOqsy&_nc_ht=scontent.fzrh1-1.fna&oh=00_AT-P31vH5xLxUUOUHepXD3wlzabRjLaZ5NFXUge5ubzFMQ&oe=6241DFF5"],
    ["Netflix", "3Fr./mese", "https://scontent.fzrh1-1.fna.fbcdn.net/v/t31.18172-8/13433361_1740390689560027_1412455068554723563_o.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=u-hEranSdIEAX8TOqsy&_nc_ht=scontent.fzrh1-1.fna&oh=00_AT-P31vH5xLxUUOUHepXD3wlzabRjLaZ5NFXUge5ubzFMQ&oe=6241DFF5"],
    ["Netflix", "3Fr./mese", "https://scontent.fzrh1-1.fna.fbcdn.net/v/t31.18172-8/13433361_1740390689560027_1412455068554723563_o.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=u-hEranSdIEAX8TOqsy&_nc_ht=scontent.fzrh1-1.fna&oh=00_AT-P31vH5xLxUUOUHepXD3wlzabRjLaZ5NFXUge5ubzFMQ&oe=6241DFF5"],
    ["Netflix", "3Fr./mese", "https://scontent.fzrh1-1.fna.fbcdn.net/v/t31.18172-8/13433361_1740390689560027_1412455068554723563_o.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=u-hEranSdIEAX8TOqsy&_nc_ht=scontent.fzrh1-1.fna&oh=00_AT-P31vH5xLxUUOUHepXD3wlzabRjLaZ5NFXUge5ubzFMQ&oe=6241DFF5"],
    ["Netflix", "3Fr./mese", "https://scontent.fzrh1-1.fna.fbcdn.net/v/t31.18172-8/13433361_1740390689560027_1412455068554723563_o.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=u-hEranSdIEAX8TOqsy&_nc_ht=scontent.fzrh1-1.fna&oh=00_AT-P31vH5xLxUUOUHepXD3wlzabRjLaZ5NFXUge5ubzFMQ&oe=6241DFF5"],
  ]
  return (
    <div>
      <div className="h-screen flex justify-evenly pt-10 flex-wrap px-48">
        {
          img_title_desc_list.map((li, i) => (
            <CustomImage
              src={li[2]}
              title={li[0]}
              description={li[1]}
              key={i}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Contents