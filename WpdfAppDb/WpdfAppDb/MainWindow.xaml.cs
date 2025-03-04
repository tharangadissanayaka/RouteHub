using System;
using System.Linq;
using System.Windows;
using Microsoft.VisualBasic;

namespace WpdfAppDb
{
    public partial class MainWindow : Window
    {
        private ProductDbContext _db = new ProductDbContext();

        public MainWindow()
        {
            InitializeComponent();
            LoadData();
        }

        private void LoadData()
        {
            RoomGrid.ItemsSource = _db.Rooms.ToList();
        }

        private void Add_Room(object sender, RoutedEventArgs e)
        {
            // Prompt the user for Room Number
            string roomNumber = Microsoft.VisualBasic.Interaction.InputBox("Enter Room Number:", "Add Room", "");
            if (string.IsNullOrWhiteSpace(roomNumber))
            {
                MessageBox.Show("Room number cannot be empty!", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }

            // Prompt the user for Room Type
            string roomType = Microsoft.VisualBasic.Interaction.InputBox("Enter Room Type (Single, Double, Suite):", "Add Room", "Single");
            if (string.IsNullOrWhiteSpace(roomType))
            {
                MessageBox.Show("Room type cannot be empty!", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }

            // Prompt the user for Price Per Night
            string priceInput = Microsoft.VisualBasic.Interaction.InputBox("Enter Price Per Night:", "Add Room", "50");
            if (!decimal.TryParse(priceInput, out decimal price))
            {
                MessageBox.Show("Invalid price entered!", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }

            // Check if the room already exists
            if (_db.Rooms.Any(r => r.RoomNumber == roomNumber))
            {
                MessageBox.Show("A room with this number already exists!", "Duplicate Room", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            // Create a new room with user input
            Room newRoom = new Room()
            {
                RoomNumber = roomNumber,
                RoomType = roomType,
                PricePerNight = price,
                IsBooked = false
            };

            _db.Rooms.Add(newRoom);
            _db.SaveChanges();
            LoadData();
        }


        private void Delete_Room(object sender, RoutedEventArgs e)
        {
            if (RoomGrid.SelectedItem is Room selectedRoom)
            {
                _db.Rooms.Remove(selectedRoom);
                _db.SaveChanges();
                LoadData();
            }
            else
            {
                MessageBox.Show("Please select a room to delete.", "Error", MessageBoxButton.OK, MessageBoxImage.Warning);
            }
        }

        private void Update_Room(object sender, RoutedEventArgs e)
        {
            if (RoomGrid.SelectedItem is Room selectedRoom)
            {
                string input = Interaction.InputBox("Enter new price:", "Update Price", selectedRoom.PricePerNight.ToString());
                if (decimal.TryParse(input, out decimal newPrice))
                {
                    selectedRoom.PricePerNight = newPrice;
                    _db.SaveChanges();
                    LoadData();
                }
                else
                {
                    MessageBox.Show("Invalid price entered!", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
            else
            {
                MessageBox.Show("Please select a room to update!", "No Selection", MessageBoxButton.OK, MessageBoxImage.Warning);
            }
        }
    }
}
