using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebAsos.Migrations
{
    /// <inheritdoc />
    public partial class fixtblOrders : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "FullName",
                table: "tblOrders",
                newName: "Surname");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Surname",
                table: "tblOrders",
                newName: "FullName");
        }
    }
}
