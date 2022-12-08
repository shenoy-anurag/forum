describe('Sign Up User', () => {
    it('Navigate to Log In', () => {
        cy.visit('http://localhost:4200/');
        cy.contains('Log In').click();
        cy.url().should('include', '/login');
    })

    it('Navigate to Sign Up', () => {
        cy.contains('Sign Up').click();
        cy.url().should('include', '/signup');
    })

    it('Populate Form', () => {
        cy.get('input[name="firstname"]').type('John').should('have.value', "John");
        cy.get('input[name="lastname"]').type('Doe').should('have.value', "Doe");
        cy.get('input[name="email"]').type('John.Doe@email.com').should('have.value', "John.Doe@email.com");
        cy.get('input[name="username"]').type('JohnDoe123').should('have.value', "JohnDoe123");
        cy.get('input[name="password"]').type('Aa1abc').should('have.value', "Aa1abc");
        cy.get('input[name="password2"]').type('Aa1abc').should('have.value', "Aa1abc");

        cy.contains('Submit').click();
        cy.url().should('include', '/home');
    })

    it ('Log Out', () => {
        cy.contains('Log Out').click();
    })
});

describe('Sign In User', () => {
    it('Navigate to Log In', () => {
        cy.contains('Log In').click();
        cy.url().should('include', '/login')
    })

    it('Populate Form', () => {
        cy.get('input[name="username"]').type("JohnDoe123").should('have.value', 'JohnDoe123');
        cy.get('input[name="password"]').type('Aa1abc').should('have.value', "Aa1abc");
    })

    it('Log In', () => {
        cy.get('button[name="loginbutton"]').click();
    })

    it('Check Profile', () => {
        cy.contains('Profile').click();
        cy.url().should('include', '/profile')
    })
})

describe('Navigation Menu Tests', () => {
    it('Open Home Page', () => {
        cy.contains('Home').click();
        cy.url().should('include', '/home');
    })

    it('Open Subreddits', () => {
        cy.contains('Subreddits').click();
        cy.url().should('include', '/subreddits');
    })

    it('Reddit Logo Home Button', () => {
        cy.contains('Reddit').click();
        cy.url().should('include', '/home');
    })
})

describe('Create New Community', () => {
    it('Navigate to Subreddits', () => {
        cy.contains('Subreddits').click();
        cy.url().should('include', '/subreddits');
    })

    it('Create New Community', () => {
        cy.contains('Create New Community').click();
        cy.url().should('include', '/newsubredditsform');
    })

    it('Populate New Subreddit Form', () => {
        cy.get('input[name="name"]').type('MyTestCommunityTitle').should('have.value', "MyTestCommunityTitle");
        cy.get('input[name="description"]').type('This is my fake description').should('have.value', 'This is my fake description');
    })

    it('Submit Form', () => {
        cy.contains('Create Subreddit').click();
    })

    it('Check For New Community', () => {
        cy.contains('Subreddits').click();
        cy.contains('MyTestCommunityTitle');
    })

    it('Open Our Community Page', () => {
        cy.contains('MyTestCommunityTitle').click();
    })

    it('Subscribe to Community Page', () => {
        cy.contains("Subscribe").click();
    })

    it('Upvote Community', () => {
        cy.get('button[id="upvoteButton"]').click();
    })

    it('Downvote Community', () => {
        cy.get('button[id="downvoteButton"]').click();
    })

    it('Delete New Community', () => {
        cy.get('button[id="deleteCommunityButton"]').click()
        cy.url().should('include', '/subreddits');
    })
})

describe('Create Post', () => {
    it('Navigate to Home', () => {
        cy.contains('Home').click();
        cy.url().should('include', '/home');
    })

    it('Create New Post', () => {
        cy.contains('Create New Post').click();
        cy.url().should('include', '/newpostform');
    })

    it('Populate Form', () => {
        cy.get('input[name="title"]').type('Cypress Post Title').should('have.value', "Cypress Post Title");
        cy.get('textarea[name="body"]').type('Cypress Post Body').should('have.value', "Cypress Post Body");
        cy.get('mat-select[formControlName="community"]').click().get('mat-option').contains('sociology').click();
    })

    it('Submit Form', () => {
        cy.contains('Create Post').click();
    })
})

describe('View New Post', () => {
    it('Navigate to Home', () => {
        cy.contains('Home').click();
        cy.url().should('include', '/home');
    })
})

describe('Delete New Post', () => {
    it('Navigate to Home', () => {
        cy.contains('Home').click();
        cy.url().should('include', '/home');

        cy.contains('Cypress Post Title').click();
        cy.get('button[name="deletePostButton"]').click();
    })
})

describe('Delete Test User', () => {
    it('Navigate to Profile', () => {
        cy.contains('Profile').click();
        cy.url().should('include', '/profile');
    })

    it('Delete User', () => {
        cy.contains('Delete User').click();
        cy.url().should('include', '/delete-user');

        cy.get('input[name="username"]').type("JohnDoe123").should('have.value', 'JohnDoe123');
        cy.get('input[name="password"]').type('Aa1abc').should('have.value', "Aa1abc");        

        cy.contains('Delete User').click();
    })
})
