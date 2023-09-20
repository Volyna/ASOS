using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebAsos.Migrations
{
    /// <inheritdoc />
    public partial class updateproducts : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Fit",
                table: "tblProducts",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Material",
                table: "tblProducts",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Pattern",
                table: "tblProducts",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ProductType",
                table: "tblProducts",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Shop",
                table: "tblProducts",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Fit",
                table: "tblProducts");

            migrationBuilder.DropColumn(
                name: "Material",
                table: "tblProducts");

            migrationBuilder.DropColumn(
                name: "Pattern",
                table: "tblProducts");

            migrationBuilder.DropColumn(
                name: "ProductType",
                table: "tblProducts");

            migrationBuilder.DropColumn(
                name: "Shop",
                table: "tblProducts");
        }
    }
}
