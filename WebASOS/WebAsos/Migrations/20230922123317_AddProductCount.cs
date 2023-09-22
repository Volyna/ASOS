using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebAsos.Migrations
{
    /// <inheritdoc />
    public partial class AddProductCount : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Cout",
                table: "tblProducts",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cout",
                table: "tblProducts");
        }
    }
}
