using ChomadoProblemForm;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Skclusive.Material.Component;
using Skclusive.Material.Core;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
builder.Services.TryAddMaterialServices(new MaterialConfigBuilder().Build());

await builder.Build().RunAsync();
