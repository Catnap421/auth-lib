import { Controller, Post, UseGuards, Request, Get, Req } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user;
    }

    /*
    In order to test our route we'll have our /auth/login route simply return the user for now.

    This also lets us demonstrate another Passport feature: 
    "Passport automatically creates a user object", based on the value we return from the validate() method, 
    and assigns it to the Request object as req.user. 
    */
}
