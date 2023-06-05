using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebAsos.Migrations
{
    /// <inheritdoc />
    public partial class Addnewlinetouser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "AsosPartners",
                table: "AspNetUsers",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "DataBirth",
                table: "AspNetUsers",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "DiscountsAndSales",
                table: "AspNetUsers",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "MostlyInterested",
                table: "AspNetUsers",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "NewStuff",
                table: "AspNetUsers",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "YourExclusives",
                table: "AspNetUsers",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AsosPartners",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "DataBirth",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "DiscountsAndSales",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "MostlyInterested",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "NewStuff",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "YourExclusives",
                table: "AspNetUsers");
        }
    }
}
