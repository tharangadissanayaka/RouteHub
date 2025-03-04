using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpdfAppDb
{
    public class Room
    {
        public int Id { get; set; } // Primary Key
        public string RoomNumber { get; set; }
        public string RoomType { get; set; } // Single, Double, Suite
        public decimal PricePerNight { get; set; }
        public bool IsBooked { get; set; } // True if booked, False if available

    }
}
